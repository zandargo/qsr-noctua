export function mutLoggedStatus (state, value) {
  state.status.isLoggedIn = value
}

export function mutUserInfo (state, User) {
  state.info.id = User.uid
  state.info.name = User.displayName
  state.info.email = User.email
}
