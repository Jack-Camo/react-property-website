import { companies } from "../constants";
import styles from "../style";

const Companies = () => {
  return (
    <section className={`${styles.flexCenter} my-20 hidden md:flex`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {companies.map((company) => (
          <div key={company.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={company.logo} alt={company.alt} className="sm:w-[192px] w-[100px] max-h-[40px] object-contain hover:brightness-150 transition duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Companies