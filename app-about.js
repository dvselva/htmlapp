$(document).ready(function () {
getAbout();
});


function getAbout()
{
    var contentfulClient = contentful.createClient({
        accessToken: '6o_DMSyLI7OSMmd434UXyAb2ILGS2R9F7c5h_lmsYWI',
        space: '9gf6mhyw2bkx'
    })
    var PRODUCT_CONTENT_TYPE_ID = 'yesgeAbout'
    var descHtml="";
    contentfulClient.getEntries({
        content_type: PRODUCT_CONTENT_TYPE_ID
    })
        .then(function (entries) {
            let description="";
            entries.items[0].fields.description.content.forEach((item,index) => {
                description = item.content[0].value;
                descHtml +=   description 
            });
            
            $("#about-contentful").append(descHtml);

        })
}
