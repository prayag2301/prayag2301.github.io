import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill11 = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img  
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{
            opacity: 1, x: 0,
        }}
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAB9CAMAAAAvI/mIAAAA3lBMVEX///8ho2YYXDcQfEEzxIESgEUVhEoPdj0NbjcOcjr7/fwMazXZ4dwlXzza7OIopWkZkFUuunlMjF3c8+cWUTISQSggnGEeklsTSSwJRSVNrnwUbjwWZjpMlGUPOCNYzJNNclbA1cYAejbp9O4+q3UKJhgOMR/o7eo9bE4AZiAmdD0AaxcAdjfQ4NXAz8O83crP7t0AmlMAv3JnuI5v0Z9Fnm+vy7c0k2Acfk4adEhfnHJ4qoegwKmQtpsthU8AciYAXwALUClNeliuwLIsVjk5Qzs5UEE7W0dmhG8ARw2Z2lc8AAADcUlEQVR4nO3aaVfaQBSA4dRxEkisIiWtFEGTiBEZ7CpqUJCu+v//UGcJ2QyGHiq5Ob1vT20JH/JwmQzRo6ZhGIZhGIZhGIZh2H+WuVvQm+cr0/7hZK+g/e1nO/pYnv3Tq6IK8Nufyxq++aXQXojf/loS3jv5B/gjE/GIRzziEY94xCMe8evj3y4NPv7y3fJg4XedbOOrhoI2UunX17EeBv526j6J6ipK5Zcw0tm6gYV3Zvpqcb3ead3oulz6jb39gjaBD2ixW4/m327XLIPwjEbRdvT+5fFmdyV8uHB0jq8RWWXw0aqvIJ5WF09pZfGUVghP6VI5dPxUmVMvZFoNPO36Hs9RaEpdRz5kCT1cvO6O5bEJkXg2kae/IvH9AWS8TjxxzHPlamcj8eDWjegENp7dyYOBWCnuRPzXn8Z04Hjqymn7kivfhcCN6cDx/JqVRyeMuvJNGM2SduD48Jr1XDoVg/eaSTp0PFVobTKUL0JcrYRUA0+j69SbilN7w7TdIGDx4bYyFKM31dXKknIeWHy0nQeLs46zdqj4xC1A+Dmr+YSl6UDxqVtHdqWeGg+zdoPY9uFhR0YbBV1uBp+57yVO+FyXpekcf3raam3JOqSg5kbwmdhk8ZyToRt1+Hhx2JfTv2MJet2o1w3geFex5alNlrCLoE2+mbdodtlMbjkOS84dOp7M5Cn5elGjD1gsB44nRO3xI5cQdiufHixWjKgGbc03E3TC1KdrV1yoU/UeDOqRvgbugm0m7IT54pgzE2tlIG/ozSAaO9zJy/PN1FIJwmtU3pw596FdBBKvThcuGjV4wwi/oZ0MwrEDxYenM+TPaTwW7ewj8XDnPBw7rw4NH5/OOJctNnajrh7zsYd2CzA+eRsT7Y+12mLwlgUYn5TH9mjJWJDxRt7co+VuyWow8Xn09NTB4lNuYxkdJj5v6nl2aHgtYEn5U7uVChjeuc/ZYnLHzgc/j/GHRX3bzO8eDJ6U2WoWL2Te70X4wo438lsf/kW27z/aedn9014PGD7n5fzs58btNnz8r15uNg8+/re9tFXtJeLbnHnAs9VfW/3L/6xsLxN/kN/q9vLwZ60lrW4vEf8XSMQjHvGIRzziN5n5MF/bPn8ox65pF49r2x93ysJrF2ev1+u4PDtvZ73KpGMYhmEYhmEYhmHYS/cHC+DXaiBpDIAAAAAASUVORK5CYII='
        alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28
        md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transtion duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>78%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill11