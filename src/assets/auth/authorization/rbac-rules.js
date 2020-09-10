const rules = {
    visitor: {
        static: [
            "read:messages",
            "read:music"
        ]
    },
    user: {
        static: [
            "read:messages",
            "read:music"
        ]
    },
    admin: {
        static: [
            "read:messages",
            "read:music",
            "upload:dawfile",
            "upload:music"
        ],
        dynamic: {
            // "posts:edit": ({userId, postOwnerId}) => {
            //     if (!userId || !postOwnerId) return false;
            //     return userId === postOwnerId;
            // }
        }
    }
};

export default rules;