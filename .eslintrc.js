module.exports = {
  "extends": "airbnb",
  "rules":{
    // Prevent warnings for webpack resolve aliases.
    "import/no-unresolved": "off",
    // Prevent warnings for webpack extension resolution.
    "import/extensions": "off"
  }
};