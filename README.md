# Custom error pages for Apache2
This project contains HTTP error messages in multiple languages with nice UI design.

## Installation
- Clone or download this repository to your web server.  
- Open `/etc/apache2/conf-available/localized-error-pages.conf` file.  
- Uncomment and change example configuration:  
```xml
<IfModule mod_negotiation.c>
	<IfModule mod_include.c>
		<IfModule mod_alias.c>

			Alias /error/ "/var/www/apache-error-style/"

			<Directory "/var/www/apache-error-style/">
				Options IncludesNoExec
				AddOutputFilter Includes html
				AddHandler type-map var
				Order allow,deny
				Allow from all
				LanguagePriority en cs de es fr it nl sv pt-br ro
				ForceLanguagePriority Prefer Fallback
			</Directory>

			<Location /error/>
				Satisfy Any
			</Location>

			ErrorDocument 400 /error/HTTP_BAD_REQUEST.html.var
			ErrorDocument 401 /error/HTTP_UNAUTHORIZED.html.var
			ErrorDocument 403 /error/HTTP_FORBIDDEN.html.var
			ErrorDocument 404 /error/HTTP_NOT_FOUND.html.var
			ErrorDocument 405 /error/HTTP_METHOD_NOT_ALLOWED.html.var
			ErrorDocument 408 /error/HTTP_REQUEST_TIME_OUT.html.var
			ErrorDocument 410 /error/HTTP_GONE.html.var
			ErrorDocument 411 /error/HTTP_LENGTH_REQUIRED.html.var
			ErrorDocument 412 /error/HTTP_PRECONDITION_FAILED.html.var
			ErrorDocument 413 /error/HTTP_REQUEST_ENTITY_TOO_LARGE.html.var
			ErrorDocument 414 /error/HTTP_REQUEST_URI_TOO_LARGE.html.var
			ErrorDocument 415 /error/HTTP_UNSUPPORTED_MEDIA_TYPE.html.var
			ErrorDocument 500 /error/HTTP_INTERNAL_SERVER_ERROR.html.var
			ErrorDocument 501 /error/HTTP_NOT_IMPLEMENTED.html.var
			ErrorDocument 502 /error/HTTP_BAD_GATEWAY.html.var
			ErrorDocument 503 /error/HTTP_SERVICE_UNAVAILABLE.html.var
			ErrorDocument 506 /error/HTTP_VARIANT_ALSO_VARIES.html.var
		</IfModule>
	</IfModule>
</IfModule>
```
where `/var/www/apache-error-style/` - your absolute path to directory.

## Project inspired
[Index Style](http://recursive-design.com/svn/misc/apache/index-style/) - a set of html, css and image files designed to make the default 
apache file listings look a little nicer. (UI design)