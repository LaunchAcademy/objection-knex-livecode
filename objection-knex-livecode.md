Currently we have an application that is set up to keep track of our growing comic book collection. The react front end has been provided to us, but we will need to add code to the server to return descriptive error messages for the user if they can't add a new comic on the form page.

### Getting Started

```sh
yarn install
createdb comic_books_development
cd server
yarn run migrate:latest
yarn run db:seed
cd ..
yarn run dev
```

### Instructions

1. After running our migration and seeder we should be able to navigate to https://localhost:3000 and see a list of three comics. There is also a link to add a new comic which will take us to `comic-books/new`. Currently we can click submit, but there are no error messages being displayed back to us if the form isn't filled out correctly. Let's change that!

#### Tips

- Take a look in `/api/v1/comicBooksRouter.js` and see what is currently set up for handling POST requests.
- Don't forget to update `ComicBook.js`
- Reference [format-jsonschema] when setting up the jsonSchema

[format-jsonschema]: https://json-schema.org/understanding-json-schema/reference/string.html#format
