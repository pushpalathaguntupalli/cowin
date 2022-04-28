import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="vaccination_by_gender_container">
      <h1 className="vaccination-by-gender-heading">Vaccination by gender</h1>
      <PieChart width={1000} heading={300}>
        <Pie
          data={vaccinationByGenderDetails}
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle="30%"
          innerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#2d87bb" />
          <Cell name="Female" fill="#a3df9f" />
          <Cell name="Others" fill="#64c2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
