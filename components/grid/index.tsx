import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg, imgHeight, imgWidth, spareImgHeight, spareImgWidth}) => (
                <BentoGridItem key={id}
                id={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                spareImgHeight={spareImgHeight}
                spareImgWidth={spareImgWidth}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid