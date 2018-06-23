require 'opal'
require 'browser' # CLIENT ONLY
require 'browser/delay' # CLIENT ONLY
require 'opal-autoloader'
require 'hyper-store'
require 'hyper-react'
require 'react/auto-import'

require_tree 'stores'
require_tree 'models'
require_tree 'components'

# mount your top level component
# Hyperloop::TopLevel.on_ready_mount(App)