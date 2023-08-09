import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgText}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.decs}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            error optio, dolore veritatis dolor illo. Ad aliquam ullam nihil
            officia qui! Deleniti vel et fugit dolores porro. Eos, impedit
            sequi.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            error optio, dolore veritatis dolor illo. Ad aliquam ullam nihil
            officia qui! Deleniti vel et fugit dolores porro. Eos, impedit
            sequi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit obcaecati qui porro placeat, ratione repellat asperiores sunt quaerat quod deleniti ut molestiae ipsa! Expedita minima iure totam veniam consequuntur.
            Saepe animi exercitationem reprehenderit neque fugit repudiandae, illo illum? Accusamus iusto natus reprehenderit eaque temporibus quisquam animi aliquid dignissimos, cum dolorem. Quisquam illum inventore nihil hic qui perferendis iure dolorum?
            Possimus dignissimos alias ut nostrum dolore earum velit voluptatem placeat impedit dolorem itaque et, eos quis illum est laudantium similique, praesentium blanditiis corporis. Molestiae unde at aspernatur nulla atque dolores.
            Laborum odio suscipit nemo, consequatur, quae reprehenderit labore ratione vero, nihil cum illo dicta magnam dignissimos aspernatur laudantium? Neque eaque at hic ab, iusto aspernatur voluptatibus reprehenderit! Sunt, architecto sed.
            Magni, at assumenda qui alias cumque numquam, corrupti dicta nobis rem vitae tempore? Voluptatem possimus nemo quo sequi rerum magnam, minus aut? Aperiam tempora officia quas! Repellendus placeat qui blanditiis.
            Facere laborum, cupiditate error eaque ea rerum blanditiis. Amet voluptatibus veritatis laudantium exercitationem, fuga provident, ex saepe, voluptatem error velit deleniti! Repellat magnam iusto nam beatae repellendus non, praesentium dolorem.
            
            <br />
            <br />
            Atque laborum autem rem optio recusandae natus inventore voluptatibus, assumenda modi, eos tempora, exercitationem est. Earum optio, consequatur sed animi deserunt corrupti totam sequi vel consectetur non, quos quidem dolor!
            Quos nostrum saepe, doloribus sed vero ducimus sit neque ab odio possimus obcaecati sunt voluptatibus laboriosam eaque alias dicta molestiae! Saepe quibusdam iusto dolorum eius corporis? Facere placeat culpa natus!
            Ratione perspiciatis adipisci animi vitae optio? Culpa exercitationem ex dolorum delectus excepturi praesentium, voluptate enim dolore deleniti voluptatem quam, incidunt nesciunt architecto! Rerum fugit quibusdam expedita excepturi quo itaque saepe?
            Dolorem tenetur nostrum consectetur iusto saepe amet odio nam, aut obcaecati animi tempore cumque odit repudiandae inventore illo architecto veniam possimus! Officiis odit veritatis aliquid sint fuga ducimus aperiam iusto?
          </p>
          <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
