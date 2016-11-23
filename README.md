# hetic-p2019-groupe15

Version 1.0.0

# Installation

```
git clone https://github.com/T-Zahil/hetic-p2019-groupe15
cd hetic-p2019-groupe15
git checkout develop
npm install
```

# Working on the project

Just type the following commande into the main directory : 
```
gulp
```
It will be launch all the gulp tasks like SASS transpiler, files compress, hot-reload etc...

# Github Process

1/ Pull the code
```
git pull
```

2/ Make and add a feature
```
git add [yourfile]
```

3/ Commit and push
```
git commit -m "[key] Your feature description"
git push origin develop
```

4/ If you want to merge the develop branch to the master branch, do the following process :
```
# Go to master
git checkout master
# Do the merge
git merge develop
# Commit
git commit -m "Version X.X.X"
# Don't forget to return to the develop branch to work !
git checkout develop
```
