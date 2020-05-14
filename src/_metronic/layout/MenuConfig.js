export default {
    header: {
        self: {},
        items: [
            {
                title: "Home",
                root: true,
                alignment: "left",
                page: "https://iseser.com/",
            },
            {
                title: "Paper Submission",
                root: true,
                alignment: "left",
                page: "submission/create",
                bullet: "dot"
            },
            {
                title: "Sended Papers",
                root: true,
                alignment: "left",
                page: "submissions",
                bullet: "dot"
            },
            {
                title: "Presentations",
                root: true,
                alignment: "left",
                page: "presentation",
                bullet: "dot"
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
