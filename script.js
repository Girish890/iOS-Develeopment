var arr_of_cats = [
    "https://imageserver.petsbest.com/marketing/blog/what-does-my-cats-meowing-mean.jpg",
    "https://www.thesprucepets.com/thmb/RvDNaSgFcUqQpU4RmiCPd8QaItA=/1500x844/smart/filters:no_upscale()/GettyImages-1067347086-b5b784cc95e040e39507bf7114e58b15.jpg",
    "https://www.purina.com/sites/g/files/auxxlc196/files/styles/social_share_large/public/purina-why-do-cats-meow-500x300.jpg?itok=REzrbRuV",
    "https://imageserver.petsbest.com/marketing/blog/what-does-my-cats-meowing-mean.jpg",
    "https://vetstreet-brightspot.s3.amazonaws.com/cc/58/ab650dbc44508064343191465a9c/Senior-cat-iStock_000017062815Small-335lc010314.jpg",
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHEwrHJ9gIyEp53qe9Zn50gUvP--rqVDtZvZmA_9n6rvo5Db_ojTEL8vebfyPIyJNyew&usqp=CAU",
    "https://cdn.shortpixel.ai/spai/w_872+q_lossy+ret_img+to_webp/https://purrpetrators.com/wp-content/uploads/2018/10/s3-953x953.jpg",
    "https://thumbs-prod.si-cdn.com/dZLWPBY33l84qZcZ_LIZKU1CfrM=/800x600/filters:no_upscale():focal(594x274:595x275)/https://public-media.si-cdn.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
    "https://www.pawschicago.org/fileadmin/_processed_/1/2/csm_PAWS_New_Site__50_of_201__70103c47cf.jpg",
    "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://www.tampabay.com/resizer/o2kSjQMEADVSk9M33P5b8lXcTq0=/1600x900/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/XG3SK53RURE3BHYGZIZFJ7LNAA.jpg",
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/is_my_cat_normal_slideshow/getty_rm_photo_of_cat_staring_close_up.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5NkLO1kHjI1NVFPzCTYg7MXyplnxYtYUkA&usqp=CAU",
];
var img = document.getElementById("cat");

function genCat() {
    img.src = arr_of_cats[Math.floor(Math.random() * arr_of_cats.length)];
}