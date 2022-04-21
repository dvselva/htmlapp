// (function () {
$(document).ready(function () {

    save();

    $("#my-form").submit(function (e) {
        e.preventDefault(); // <==stop page refresh==>
        console.log("submitted");
    });

    $("#navigation").load("./navigation.html");

    var contentfulClient = contentful.createClient({
        accessToken: '6o_DMSyLI7OSMmd434UXyAb2ILGS2R9F7c5h_lmsYWI',
        space: '9gf6mhyw2bkx'
    })
    var PRODUCT_CONTENT_TYPE_ID = 'yesgeProducts'



    contentfulClient.getEntries({
        content_type: PRODUCT_CONTENT_TYPE_ID
    })
        .then(function (entries) {
            entries.items.forEach((item) => {
                var cardHtml="";
                let imagesrc="";
                let name="";
                let decription="";
                console.log(item.fields.name);
                name=item.fields.name;
                description = item.fields.description.content[0].content[0].value;
                
                item.fields.image.forEach((img) => {
                    console.log(img.fields.file.url)
                    imagesrc=img.fields.file.url;
                })

                cardHtml +=  '<div class="col-md-3" ><div class="card" style = "width: 18rem;" > \
                        <img style="height:200px;" src="' + imagesrc +'" class="card-img-top" alt="..."> \
                            <div class="card-body"> \
                                <h5 class="card-title">' + name + '</h5> \
                                <p class="card-text">' + description + '</p>\
                                <a href="#" class="btn btn-primary">Go somewhere</a>\
                            </div>\
                        </div>\
                        </div>' 



                $("#main-contentful").append(cardHtml);


            })

        })


});



function save() {
    let optionsArray = ""
    let response = fetch("https://reqres.in/api/users?page=2")
        .then(response => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            data.data.forEach(element => {
                console.log(element.first_name);
                optionsArray += "<option value='" + element.first_name + "'>" + element.first_name + "</option>";
            });
            $("#validationCustom04").append(optionsArray);

        })
        .catch(error => {

        })
}


// })();