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
                title: "Sended Papers",
                root: true,
                alignment: "left",
                page: "submissions",
                bullet: "dot",
                type: "single",
            },
            {
                title: "Oral Presentations",
                root: true,
                alignment: "left",
                page: "presentation-oral",
                bullet: "dot",
                type: "single",
            },
            {
                title: "Poster Presentations",
                root: true,
                alignment: "left",
                page: "presentation-poster",
                bullet: "dot",
                type: "single",
            },
            {
                title: "Properties",
                root: true,
                alignment: "left",
                toggle: "click",
                yetki: 7,
                submenu: {
                    type: "mega",
                    width: "800px",
                    alignment: "left",
                    columns: [
                        {
                            items: [
                                {
                                    title: "Presentation Types",
                                    page: "typepresentation",
                                    bullet: "line"
                                },
                                {
                                    title: "Language Types",
                                    page: "typelanguage",
                                    bullet: "line"
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    title: "Topic Types",
                                    page: "typetopic",
                                    bullet: "line"
                                },
                                {
                                    title: "Publish Types",
                                    page: "typepublish",
                                    bullet: "line"
                                },
                            ]
                        },


                    ]
                }
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
                        title: "All Symposiums",
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
