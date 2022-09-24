export const state = () => ({
  shouldShowBackButton: false,
})
export const mutations = {
  SET_BACK_BUTTON: (state, shouldShowBackButton) => {
    state.shouldShowBackButton = shouldShowBackButton
  },
}
