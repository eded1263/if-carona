export default function (context) {
  if (context.store.state.user.currentUser?.isAdmin) {
    return true
  }
  return context.redirect('/')
}
