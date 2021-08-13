**Namerr**

A developer tool for generating fake names, user objects, emails, and more. With over 20Million possible unique name combinations, youll never need
to rely on Test User, Test User1, Test User2, Test User00.... ever again. 


To install.
```shell
$ npm i namerr 
  -or-
$ npm install namerr
```

To import **Namerr** class.
```javascript
const {Namerr} = request('namerr');
```

To use.
```javascript

Namerr.name();
// ---single name string---> "Joel Burton"

Namerr.names(3);
// ---Array of names N long---> ["Joel Burton", "Elie Schoppik", "Perry Von"]

Namerr.email();
// ---single email address string---> "m_enokida88@gmail.com"

Namerr.emails(3)
// ---Array of emails N long---> ["p_von22@comcast.net", k_ravindran22@gmail.com", "s_tran00@yahoo.com"]

Namerr.users(100);
// ---object of indexed objects containing {firstName, middleName, lastName, fullName, firstLast, email, username, password}-->
  // {
  //   0:{firstName, middleName, lastName, fullName, firstLast, email, username, password}, 
  //   1:{firstName, middleName, lastName, fullName, firstLast, email, username, password}
  //   2:{firstName, middleName, lastName, fullName, firstLast, email, username, password}
  // }

Namerr.username();
// ---single username string---> "f_uffy44"

Namerr.password();
// ---single unique password using uuidv4---> "599d050f-12db-4c9b-8130-700f1daca8f8"
```

I will be adding functionality to this and open to collaborate with anyone willing. I plan on making a better method to generate more unique usernames that don't come from just the users name. Enjoy!