import sys
import site

site.addsitedir('/var/www/AppM8UF2/env/lib/python3.5/site-packages')
sys.path.insert(0,'/var/www/AppM8UF2')

from app import app as application
