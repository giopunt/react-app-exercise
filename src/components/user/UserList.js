import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth, { LARGE } from 'material-ui/utils/withWidth'
import { Route, Switch, withRouter } from 'react-router-dom'

import View from '../layout/View'
import UserProfileContainer from './UserProfileContainer'

const UserList = ({ users = [], match, history, width }) => {
  const showUserProfile = (user) => {
    history.push(`/users/${user.username}`)
  }

  const listItems = (
    <View>
      { users.map(user => (
        <ListItem
          onClick={() => { showUserProfile(user) }} key={user.username} style={{color: "black"}}
          primaryText={ `${user.name.first} ${user.name.last}`}
          leftIcon={<ActionGrade color={pinkA200} />}
          rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
        />
      ))}
    </View>
  )

  return (
    <View style={{ display: 'flex' }}>
      <Route
        exact={width < LARGE}
        path={`${match.url}`}
        render={() => listItems }
      />
      <Switch>
        <Route path={`${match.url}/:username`} component={UserProfileContainer} />
        <Route exact path={width < LARGE ? `/` : null} component={View} />
      </Switch>
    </View>
  )
}

export default withWidth()(withRouter(UserList))

UserList.contextTypes = {
  router: PropTypes.object.isRequired
}
