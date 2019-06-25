const apikey = 'mDSI1_m6iUU0d5HOSHe-rVwHV7KuXutJLT3bmIk5Mk9QBo6UgMrz5JJxHoC6rDZPKC7ch6CQXZO6KcZlxOI0Jl5Th42LBkI8EyfObMOJnDETfcsTQoF9WOJaUSUSXXYx';
const Yelp = {
    search(term,location,sortBy){
        const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        const corsepath = 'https://cors-anywhere.herokuapp.com/';
        return fetch(corsepath + url,{
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map( business => {
                  return {
                    id : business.id,
                    imageSrc: business.image_url,
                    name : business.name,
                    address : business.location.address1,
                    city : business.location.city,
                    state : business.location.state,
                    zipCode : business.location.zipCode,
                    category : business.categories[0].title,
                    rating : business.rating,
                    reviewCount : business.review_count,
                  }
                  })
            }
        });
    }
};

export  {Yelp};