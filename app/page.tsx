import React from 'react'
import { Hero } from './hero/page'
import { ProgressiveEducationSection } from './progressive-education/page'
import EventsPage from './events/page'
import NewsPage from './news/page'
import GraduatorsPage from './graduators/page'
import FactsFiguresPage from './facts_figures/page'
import CampusMapsPage from './_components/campus/page'

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProgressiveEducationSection/>
      <EventsPage/>
      <NewsPage/>
      <GraduatorsPage/>
      <FactsFiguresPage/>
      <CampusMapsPage/>
    </div>
  )
}
