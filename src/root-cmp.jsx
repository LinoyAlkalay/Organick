import React from 'react'
import { Routes, Route } from 'react-router'
import { AppFooter } from './cmps/app-footer'
import { HomePage } from './pages/home-page'
import { AppHeader } from './cmps/app-header'
import { EntityIndex } from './pages/entity-index'

export function RootCmp() {
    return <section className="main-layout app">
        <AppHeader />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entity" element={<EntityIndex />} />
        </Routes>
        <AppFooter />
    </section>
}


