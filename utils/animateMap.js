// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
// https://github.com/tailwindlabs/tailwindcss/discussions/3461#discussioncomment-329183
// recommended to pre-create lookup table object instead of dynamically creating classes

export const animateMap = {
  0: 'animate-[fadeInUp_.5s_ease-in-out_0.1s_1_normal_forwards]',
  1: 'animate-[fadeInUp_.5s_ease-in-out_0.3s_1_normal_forwards]',
}