/** @format */

import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Classes from "./Classes";




const classes: Array<ClassType> = [
  {
    name:"Weight Training Classes",
    description:"최신식 웨이팅 트레이닝존 설치",
    image:image1,
  },
  {
    name:"Yoga Classes",
    description:"요가 클래스도 즐겨봐요",
    image:image2,
  },
  {
    name:"Ab Core Classes",
    description:"Ab Core클래스도 EVOGYM과 함께!",
    image:image3,
  
  },
  {
    name:"GX Training",
    description:"GX 프로그램으로 단체 운동을 즐겨봐요",
    image:image4,
  
  },
  {
    name:"Fitness Classes",
    description:"맨몸 피트니스 클래스로 체력을 관리해드려요",
    image:image5,
  },
  {
    name:"Training Classes",
    description:"단체 트레이닝 클래스도 즐기실수 있어요",
    image:image6,
  }
]


type Props = {
  setSelectedPage: (Value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {
              classes.map((item,index)=>(
                <Classes 
                  key={`${item.name} -${index}`}
                  image={item.image}
                  description={item.description}
                  name={item.name}
                />
              ))
            }
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
