## Zero to Hero

1. `brew install ruby`
2. `export PATH=/usr/local/opt/ruby/bin:$PATH`
3. `gem install --user-install bundler jekyll`
4. `ruby -v`
5. `export PATH=$HOME/.gem/ruby/X.X.0/bin:$PATH` (replacing `X.X` with the version of Ruby)
6. `gem env`
7. `jekyll build`
8. `jekyll serve`


`cd _site`
`git commit -a`
`git push origin gh-pages`
`