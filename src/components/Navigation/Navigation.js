import { Add, Explore, GetApp } from '@material-ui/icons'
import { NavigationChannel, NavigationTree, NavigationWrapper } from './styles'

function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationTree>
        <NavigationChannel>
          <Add />
        </NavigationChannel>
        <NavigationChannel>
          <Explore />
        </NavigationChannel>
        <NavigationChannel>
          <GetApp />
        </NavigationChannel>
      </NavigationTree>
    </NavigationWrapper>
  )
}

export default Navigation
