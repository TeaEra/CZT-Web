(function () {
    "use strict";

    // some codes here;

    window.czt = window.czt || {};

    //##########################################################################
    window.czt.resume = {
        // Basic information
        "info": {
            "name-en" : "Vince CHEN",
            "name-zh": "CHEN Zhengtong",
            "gender" : "male",
            "birthday" : "1988/5/29",
            "email" : {
                "gmail" : "cllf08214@gmail.com",
                "qq" : "cllf08214@qq.com"
            },
            "mobile" : {
                "mainland" : "(+86) 14714319686",
                "hk" : "(+852) 67468785"
            }
        },
        // Education
        "education" : {
            "master" : {
                "university" : "Hong Kong Polytechnic University",
                "school" : "Electronic Information Engineering",
                "GPA" : "3.25",
                "date-start" : "2010.9",
                "date-end" : "2012.1"
            },
            "bachelor" : {
                "university" : "Tianjin University",
                "school" : "Software Engineering",
                "GPA" : "3.22",
                "date-start" : "2006.9",
                "date-end" : "2010.7"
            }
        },
        // Work Experience
        "work" : [
            {
                "company" : "ecVision",
                "date-start" : "2013.11",
                "date-end" : "2014.5"
            },
            {
                "company" : "Lab OpenCog, Hong Kong Polytechnic University",
                "date-start" : "2013.3",
                "date-end" : "2013.9"
            },
            {
                "company" : "Biomind LLC, Practical Visionaries",
                "date-start" : "2012.3",
                "date-end" : "2013.3"
            }
        ],
        // Interest
        "interest" : ["Basketball", "American pool", "Hiking"]
    };

    //##########################################################################
    window.czt.skillProfile = {
        "programming-language" : {
            "cplusplus" : {
                "proficiency" : 50,
                "description" : [
                    "Undergraduate curriculum",
                    "Project: DeSTIN",
                ]
            },
            "c" : {
                "proficiency" : 50,
                "description" : [
                    "Self-study",
                    "Project: DeSTIN",
                ]
            },
            "java" : {
                "proficiency" : 60,
                "description" : [
                    "Undergraduate curriculum",
                    "Project: OpenBiomind",
                    "Company: ecVision",
                ]
            },
            "csharp" : {
                "proficiency" : 30,
                "description" : [
                    "Self-study on campus",
                    "Project: Library Management System",
                ]
            },
            "php" : {
                "proficiency" : 40,
                "description" : [
                    "Self-study",
                ]
            },
            "python" : {
                "proficiency" : 70,
                "description" : [
                    "Self-study",
                    "Project: OpenBiomind",
                    "Project: DeSTIN",
                    "Project: QuantDigger",
                ]
            },
            "javascript" : {
                "proficiency" : 60,
                "description" : [
                    "Self-study",
                    "Tool: bootstrap, jquery, underscore",
                ]
            },
            "html" : {
                "proficiency" : 50,
                "description" : [
                    "Self-study",
                    "Simple web pages",
                ]
            },
            "css" : {
                "proficiency" : 30,
                "description" : [
                    "Self-study",
                    "Simple effects",
                ]
            }
        },
        "operating-system" : {
            "fedora" : {
                "proficiency" : 60,
                "description" : [
                    "Linux system",
                ]
            },
            "ubuntu" : {
                "proficiency" : 60,
                "description" : [
                    "Linux system",
                ]
            },
            "osx" : {
                "proficiency" : 60,
                "description" : [
                    "Personal use",
                ]
            }
        }
    };

    //##########################################################################
    window.czt.settings = {
        "icon" : {
            "work" : "glyphicon-folder-open",
            "education" : "glyphicon-book",
            "certificate" : "glyphicon-certificate",
            "comment" : "glyphicon-comment",
            "paperclip" : "glyphicon-paperclip"
        },
        "contextual" : {
            "paperclip" : "active",
            "certificate" : "success",
            "education" : "info",
            "comment" : "warning",
            "work" : "danger"
        }
    };

    //##################################################################################################################
    window.czt.timeLine = {
        "2014" : {
            "5" : [
                {
                    "type" : "work",
                    "title" : "ecVision",
                    "description": [
                        "  Expiration of contract.",
                    ]
                }
            ]
        },
        "2013" : {
            "11" : [
                {
                    "type" : "work",
                    "title" : "ecVision",
                    "description": [
                        "  Contract starting date.",
                    ]
                }
            ],
            "9" : [
                {
                    "type" : "work",
                    "title" : "Lab OpenCog",
                    "description": [
                        "  Resign from Project DeSTIN.",
                    ]
                }
            ],
            "3" : [
                {
                    "type" : "work",
                    "title" : "Lab OpenCog",
                    "description": [
                        "  Start improving Project DeSTIN.",
                    ]
                },
                {
                    "type" : "work",
                    "title" : "Biomind LLC",
                    "description": [
                        "  Job relocation from OpenBiomind to DeSTIN.",
                    ]
                }
            ]
        },
        "2012" : {
            "3" : [
                {
                    "type" : "work",
                    "title" : "Biomind LLC",
                    "description": [
                        "  Start working on bioinformatics.",
                    ]
                }
            ],
            "1" : [
                {
                    "type" : "education",
                    "title" : "Hong Kong Polytechnic University",
                    "description": [
                        "  Graduate from HKPU.",
                    ]
                }
            ]
        },
        "2010" : {
            "9" : [
                {
                    "type" : "education",
                    "title" : "Hong Kong Polytechnic University",
                    "description": [
                        "  Term begins.",
                    ]
                }
            ],
            "7" : [
                {
                    "type" : "education",
                    "title" : "Tianjin University",
                    "description": [
                        "  Graduate from Tianjin University.",
                    ]
                }
            ]
        },
        "2006" : {
            "9" : [
                {
                    "type" : "education",
                    "title" : "Tianjin University",
                    "description": [
                        "  Term begins.",
                    ]
                }
            ]
        }
    };

    //##########################################################################
})();
