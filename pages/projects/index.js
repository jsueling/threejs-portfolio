import Head from 'next/head'

import useIntersection from '../../hooks/useIntersection'
import BackToTop from '../../components/BackToTop'
import ThreeLayout from '../../components/layouts/ThreeLayout'
import NavNestedLayout from '../../components/layouts/NavNestedLayout'

function Projects() {
  useIntersection()

  return (
    <div className='dark:text-white'>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <h1 className='pt-10 text-2xl mb-10 opacity-0 animate-[fadeInUpAbs_.5s_ease-in-out_0s_1_normal_forwards]'>Projects</h1>
        <div className='animateOnScroll'>
          <p className='mb-10 p-2.5 bg-opacity-80 font-light text-black bg-white dark:text-white dark:bg-black dark:bg-opacity-50'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt est vel odio efficitur commodo. Duis dictum aliquet mauris in hendrerit. Aenean auctor odio at ultricies cursus. Proin convallis et turpis sit amet posuere. Sed aliquam faucibus iaculis. Proin id nisl blandit, laoreet nunc dignissim, consequat eros. In dignissim mauris non porta fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac nunc vel odio finibus porttitor. In ut pulvinar odio. Curabitur rutrum condimentum lectus, sit amet scelerisque elit feugiat vitae. Sed sagittis sed tellus vitae faucibus. Cras aliquet ullamcorper risus. Curabitur rutrum sed mi sit amet rutrum. Etiam gravida leo sit amet nisl ultrices, vitae sollicitudin ante consectetur. Phasellus et faucibus felis. In vestibulum eros et luctus pretium. Proin sed imperdiet mauris. Donec quam tortor, cursus eget elementum ac, rhoncus sit amet lacus. Fusce facilisis, sem in ultricies facilisis, odio odio pulvinar sapien, sed accumsan lorem felis eget mi. Nulla eu ligula tempus, vehicula leo hendrerit, imperdiet est. Duis egestas sit amet ligula ut finibus. Nunc ac accumsan purus, vel ornare neque. Curabitur sit amet velit et nisi iaculis dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin neque enim, accumsan ac nunc ut, finibus mattis massa. Integer varius, magna et accumsan gravida, orci dui vulputate eros, ut hendrerit urna enim sit amet nulla. Praesent in nibh maximus, lacinia velit quis, laoreet enim. Ut ullamcorper tortor metus, eu feugiat risus molestie quis. Nulla elit nisl, fermentum ut tellus eu, rutrum efficitur est. Donec et elit sed elit feugiat vestibulum. Nam sit amet nisi tempus, iaculis sapien vitae, tincidunt orci. Quisque consectetur lacus sed magna lobortis, sed congue est iaculis. Fusce a ultrices arcu. Suspendisse non purus diam. Nullam blandit, mi eget molestie blandit, urna tortor viverra tortor.
          </p>
        </div>
        <div className='animateOnScroll'>
          <p className='mb-10 p-2.5 bg-opacity-80 font-light text-black bg-white dark:text-white dark:bg-black dark:bg-opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi eros, interdum at leo at, malesuada faucibus odio. Proin facilisis tellus arcu, sed accumsan tellus gravida sed. In tempus magna nunc, quis imperdiet velit faucibus sit amet. Vestibulum massa ante, ullamcorper sit amet tempus eu, eleifend a justo. Nullam porta, mi vestibulum ornare porttitor, sapien ligula imperdiet ex, sed euismod neque lorem non ipsum. Mauris luctus enim eros, quis maximus velit pulvinar eu. Praesent a augue sed sapien laoreet hendrerit. Nulla facilisi. Etiam gravida lorem in velit finibus ornare. Vivamus laoreet velit augue, laoreet bibendum lacus aliquet tincidunt. Ut eu finibus quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam molestie, dolor posuere ornare suscipit, erat lectus placerat diam, nec mollis mauris nisi sed lacus. Sed quis ligula cursus, luctus mi nec, dictum dolor. Aenean maximus ligula erat, eu placerat metus mollis in. Maecenas sapien urna, tempor vitae velit eget, facilisis ornare nunc. Ut condimentum mollis augue, nec vulputate lorem mollis sed. Quisque iaculis neque eget magna finibus, a cursus neque porta. Donec est lectus, venenatis sed magna tincidunt, consequat pretium tellus. Vestibulum justo leo, tristique nec malesuada in, varius vel nisl. Donec eu odio venenatis, semper arcu id, rutrum quam. Morbi tellus nulla, facilisis eu nisi at, gravida gravida metus. Praesent rhoncus sagittis volutpat. Aliquam tristique blandit arcu quis mollis. Etiam lorem dui, congue efficitur dui eu, porta placerat sapien. Vivamus a nulla posuere, faucibus purus vitae, lacinia elit. Integer ut mi faucibus, dignissim libero non, vehicula est. Vivamus mollis et libero non sagittis. Donec pellentesque velit a scelerisque ultricies. Aenean aliquam diam ac nisi varius luctus. Mauris dapibus dignissim augue, ac vehicula urna lobortis sit amet. Nunc nec nisi eget lectus molestie mattis et sed ipsum. Integer mollis felis a nisi suscipit finibus quis sed orci. Phasellus convallis efficitur quam eget malesuada. Donec a ullamcorper mi. Donec ante odio, tincidunt pharetra fermentum in, rutrum in sem. Ut fermentum placerat sem et dapibus. Vestibulum non lacus nulla. In iaculis, quam feugiat venenatis luctus, neque dolor rutrum orci, interdum sodales augue eros sed massa. Fusce id venenatis turpis. Quisque sed consequat ex. Donec egestas mollis velit, id molestie orci maximus id. Donec tempus tempus pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mattis, justo a auctor eleifend, mauris dui volutpat magna, et gravida tortor leo vel turpis. Cras in augue eget diam feugiat vestibulum. Fusce non libero non felis facilisis auctor quis in mauris. Sed tempus diam ac finibus cursus. Nulla facilisis nibh quis ex ultrices, ut semper nulla tincidunt.
          </p>
        </div>
        <div className='animateOnScroll'>
          <p className='mb-10 p-2.5 bg-opacity-80 font-light text-black bg-white dark:text-white dark:bg-black dark:bg-opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi eros, interdum at leo at, malesuada faucibus odio. Proin facilisis tellus arcu, sed accumsan tellus gravida sed. In tempus magna nunc, quis imperdiet velit faucibus sit amet. Vestibulum massa ante, ullamcorper sit amet tempus eu, eleifend a justo. Nullam porta, mi vestibulum ornare porttitor, sapien ligula imperdiet ex, sed euismod neque lorem non ipsum. Mauris luctus enim eros, quis maximus velit pulvinar eu. Praesent a augue sed sapien laoreet hendrerit. Nulla facilisi. Etiam gravida lorem in velit finibus ornare. Vivamus laoreet velit augue, laoreet bibendum lacus aliquet tincidunt. Ut eu finibus quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam molestie, dolor posuere ornare suscipit, erat lectus placerat diam, nec mollis mauris nisi sed lacus. Sed quis ligula cursus, luctus mi nec, dictum dolor. Aenean maximus ligula erat, eu placerat metus mollis in. Maecenas sapien urna, tempor vitae velit eget, facilisis ornare nunc. Ut condimentum mollis augue, nec vulputate lorem mollis sed. Quisque iaculis neque eget magna finibus, a cursus neque porta. Donec est lectus, venenatis sed magna tincidunt, consequat pretium tellus. Vestibulum justo leo, tristique nec malesuada in, varius vel nisl. Donec eu odio venenatis, semper arcu id, rutrum quam. Morbi tellus nulla, facilisis eu nisi at, gravida gravida metus. Praesent rhoncus sagittis volutpat. Aliquam tristique blandit arcu quis mollis. Etiam lorem dui, congue efficitur dui eu, porta placerat sapien. Vivamus a nulla posuere, faucibus purus vitae, lacinia elit. Integer ut mi faucibus, dignissim libero non, vehicula est. Vivamus mollis et libero non sagittis. Donec pellentesque velit a scelerisque ultricies. Aenean aliquam diam ac nisi varius luctus. Mauris dapibus dignissim augue, ac vehicula urna lobortis sit amet. Nunc nec nisi eget lectus molestie mattis et sed ipsum. Integer mollis felis a nisi suscipit finibus quis sed orci. Phasellus convallis efficitur quam eget malesuada. Donec a ullamcorper mi. Donec ante odio, tincidunt pharetra fermentum in, rutrum in sem. Ut fermentum placerat sem et dapibus. Vestibulum non lacus nulla. In iaculis, quam feugiat venenatis luctus, neque dolor rutrum orci, interdum sodales augue eros sed massa. Fusce id venenatis turpis. Quisque sed consequat ex. Donec egestas mollis velit, id molestie orci maximus id. Donec tempus tempus pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mattis, justo a auctor eleifend, mauris dui volutpat magna, et gravida tortor leo vel turpis. Cras in augue eget diam feugiat vestibulum. Fusce non libero non felis facilisis auctor quis in mauris. Sed tempus diam ac finibus cursus. Nulla facilisis nibh quis ex ultrices, ut semper nulla tincidunt.
          </p>
        </div>
      </div>
      <BackToTop />
    </div>
  )
}

Projects.getLayout = (page) => {
  return (
    <ThreeLayout>
      <NavNestedLayout>
        {page}
      </NavNestedLayout>
    </ThreeLayout>
  )
}

export default Projects