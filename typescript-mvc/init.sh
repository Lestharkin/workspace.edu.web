# -- folder architecture
page=index
Page=${page^}
mkdir src build build/js build/js/local build/js/vendor build/assets build/css build/css/local build/css/vendor src/$page src/$page/controller src/$page/model src/$page/view
touch build/$page.html
touch src/$page/$page.ts
touch src/$page/controller/${Page}Controller.ts
touch src/$page/model/${Page}Model.ts
touch src/$page/view/${Page}View.ts
echo "/node_modules" >> .gitignore

# -- init tools
npm init -y
npm i typescript ts-standard -D
tsc --init