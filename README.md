# medius

#Get values from the URL
In the context of this article, we are going to look for only one parameter that we'll name client_id.

To retrieve that parameter (if it is indeed in the URL eg. https://abc.io?client_id=xyz ), we are going to check the ... search
Therefore, if we request: www.abc?client_id=react, what we get in the console is:

console.log(window.location.search); // "?client_id=react"params.

To achieve that, instead of splitting the URL by = and ?, we'll use the URLSearchParams object.
Now that we can get an object out of the URL, we'll make it work with our app which uses react-router. We'll therefore create a router which handles a route getting the properties in the URL as props.



#Dynamic-tag-names-in-react concept is used to load component based on tag name.
#Dynamic Component Names with JSX after result is return from query string 


ResultsPage Component  has mapping child components (abc . xyz, default) in an object.
This makes the component easier to configure (and reuse) as only an abbreviated key is required instead of the full 
component name.


If further child components are added in the future another item can be added to this map.


output sample

Example URL query parameters

1. default theme/appearence
`http://localhost:3000/#/`

2. client 'abc'
`http://localhost:3000/#/?client_id=abc`

3 client 'xyz'
`http://localhost:3000/#/?client_id=xyz`
