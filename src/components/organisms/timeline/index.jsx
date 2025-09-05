import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

function Timeline({ data, tipo }) {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="var(--color-text-main)">
      {data.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.periodo}
          dateClassName="font-bold text-textSecondary"
          icon={
            tipo === "academico" ? (
              <IoSchool />
            ) : tipo === "profissional" ? (
              <MdOutlineWork />
            ) : null
          }
          className={"pt-2.5 w-2/3"}
          contentStyle={{
            padding: 0,
            boxShadow: "none",
            borderBottom: "3px solid var(--color-border-gray)",
            borderRight: "3px solid var(--color-border-gray)",
          }}
          iconStyle={{
            background: "var(--color-background)",
            boxShadow: "none",
            border: "2px solid var(--color-text-main)",
            color: "var(--color-text-main)",
          }}
        >
          <h3 className="font-bold text-textMain">
            {item.curso ? item.curso : item.cargo}
          </h3>
          <h4 className=" text-textSecondary">{item.instituicao}</h4>
          {/* <p>{item.descricao}</p> */}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
