
import UploadControllerFactory from 'upload-controller-factory';
import { tokenized } from '../api';
import Axios from 'axios';
import uuid from 'uuid/v1';

function cozunurluk_bul(blob) {
  return new Promise(function (resolve) {
    var img = document.createElement('img');
    img.onload = function () {
        resolve({width: img.width, height: img.height});
    };
    img.onerror = function () {
        resolve({});
    };
    img.src = URL.createObjectURL(blob);
  });
}

function abortToAxiosAbort(abort) {
  var cancelToken = Axios.CancelToken.source();
  abort.onabort = function() {
    console.log("iptal et caliti");
    cancelToken.cancel();
  };
  return cancelToken.token;
}

var fdosyasira = 0;

export default UploadControllerFactory({
  async uploader(name, blob, contentType, abort, progress) {
    var fsira = ++fdosyasira;

    abort = abortToAxiosAbort(abort);

    try {
      var slug = uuid();

      var uploadResponse = await tokenized.post('/api/gupload', {
        slug: slug,
        filename: name,
        contentType: contentType
      }, {
        cancelToken: abort
      });

      var data = uploadResponse.data;

      await tokenized.put(data.upload_link, blob, {
        onUploadProgress: function(progressEvent) {
          progress(progressEvent.loaded / progressEvent.total);
        },
        cancelToken: abort
      });

      var size = null;

      if (contentType.indexOf("image/") == 0) {
        size = await cozunurluk_bul(blob);
      }

      var uploadBitirResponse = await tokenized.post('/api/guploadbitti', {
        file_id: data.file_id,
        folder_id: data.folder_id,
        realfilename: name,
        filename: data.filename,
        slug: slug,
        width: (size && size.width) || null,
        height: (size && size.height) || null,
        sira: fsira,
      }, {
        cancelToken: abort
      });

      return uploadBitirResponse.data;
    } catch(e) {
      if(!Axios.isCancel(e)) {
        console.error('Hata olustu, tekrar deneniyor..', e);
      //  return uploader(name, blob, contentType, abort, progress);
      } else {
        console.log("Iptal edildi");
      }

      throw e;
    }
  }
});
