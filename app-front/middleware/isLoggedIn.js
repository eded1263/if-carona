export default function (context) {
  if (context.store.state.user.currentUser?.id) {
    return true
  }
  return context.redirect('/')
}
