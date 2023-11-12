// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
// https://github.com/tailwindlabs/tailwindcss/discussions/3461#discussioncomment-329183
// recommended to pre-create lookup table object instead of dynamically creating classes

/* name | duration | easing-function | delay | iteration-count | direction | fill-mode */
export const animateMap = {
  staggerBounce: {
    0: 'animate-[fadeInBounceAbs_.5s_ease-in-out_0.1s_1_normal_forwards]',
    1: 'animate-[fadeInBounceAbs_.5s_ease-in-out_0.3s_1_normal_forwards]',
    2: 'animate-[fadeInBounceAbs_.5s_ease-in-out_0.5s_1_normal_forwards]',
    3: 'animate-[fadeInBounceAbs_.5s_ease-in-out_0.7s_1_normal_forwards]',
  },
  staggerUp: {
    0: 'animate-[fadeInOut_5s_ease-in-out_0.1s_1_normal_forwards]',
    1: 'animate-[fadeInOut_5s_ease-in-out_0.3s_1_normal_forwards]',
    2: 'animate-[fadeInOut_5s_ease-in-out_0.5s_1_normal_forwards]',
  }
}