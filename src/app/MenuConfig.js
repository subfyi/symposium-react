export default {
    header: {
        self: {},
        items: [
            {
                title: "Home",
                root: true,
                alignment: "left",
                page: "https://iseser.com/",
                type: "single",
            },
            {
                title: "Paper Submission",
                root: true,
                alignment: "left",
                page: "submission/create",
                bullet: "dot",
                type: "single",
            },
            {
                title: "Sended Papers",
                root: true,
                alignment: "left",
                page: "submissions",
                bullet: "dot",
                type: "single",
            },
            {
                title: "Presentations",
                root: true,
                alignment: "left",
                page: "presentation",
                bullet: "dot",
                type: "single",
            },

            {
                title: "Others",
                bullet: "line",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: [
                    {
                        title: "Documents",
                        page: "https://iseser.com/documents",
                        bullet: "line",
                    },
                    {
                        title: "Old Symposiums",
                        page: "https://iseser.com/documents-all",
                        bullet: "line",
                    },
                    {
                        title: "Contact",
                        page: "https://iseser.com/contact",
                        bullet: "line",
                    },
                ]
            },

        ]
    }
};
