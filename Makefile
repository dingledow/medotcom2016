setup:
	npm i

serve:
	gulp clean
	gulp jade
	gulp sass
	gulp js
	gulp images
	gulp favicons
	gulp robots
	gulp minifyHtml
	gulp connect watch

deploy:
	gulp clean
	gulp jade
	gulp sass
	gulp js
	gulp images
	gulp favicons
	gulp robots
	gulp minifyHtml
	gulp deploy
