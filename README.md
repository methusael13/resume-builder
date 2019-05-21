# Resumé Builder
Web resume template

#### Change profile data
The profile data can be modified at _`data/profile.json`_.

#### Change profile picture
Add an image of your own in _`public/assets/images`_, and then pass the link to that image in **`profile.json`** as given below:
```json
imageUrl: "/assets/images/<file>"
```

#### Change theme
The theme exposes only two configurable colors in **`profile.json`**. You can modify them to your liking.
```json
theme: {
  "primary": "#f4645f",
  "category-headers": "#607D8B"
}
```

### Building
- Download `nodejs` and `npm` for your platform

| Platform | Command |
| -------- | ------- |
| Ubuntu | `sudo apt-get install nodejs npm` |
| Fedora | `sudo dnf install nodejs npm` |

- Clone this repository
```
git clone https://github.com/methusael13/resume-builder.git
```

- Install dependencies
```
cd resume-builder
npm install
```

- Run Node.js server
```
npm start
```

- Open your favourite browser and browse to `http://localhost:8080`


### Preview
![Preview](https://raw.githubusercontent.com/methusael13/resume-builder/master/preview/preview.png)
