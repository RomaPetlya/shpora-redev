import { LearnComponent } from "./components/learn";
import { Header } from "./components/header";
import { HomeComponent } from "./components/home";
import { Routes, Route, Navigate } from "react-router-dom";
import { ComponentsComponent } from "./components/topics/components";
import { VirtualDomComponent } from "./components/topics/virtualDom";
import { PropsComponent } from "./components/topics/props";
import { StateComponent } from "./components/topics/StateComponent";
import { LifeCycleComponent } from "./components/topics/lifeCycle";
import { EventsComponent } from "./components/topics/events";
import { WillBeLAter } from "./components/topics/willBeLater";
import { RefsKeyFragment } from "./components/topics/refsKeysMemo";
import { MemoCallback } from "./components/topics/memoCallback";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomeComponent />}></Route>
                        <Route path="/learn" element={<Navigate to="/learn/vdom" />} />
                        <Route path="/learn" element={<LearnComponent />}>
                            <Route path="vdom" element={<VirtualDomComponent />}></Route>
                            <Route path="compts" element={<ComponentsComponent />}></Route>
                            <Route path="props" element={<PropsComponent />}></Route>
                            <Route path="state" element={<StateComponent />}></Route>
                            <Route path="lcycle" element={<LifeCycleComponent />}></Route>
                            <Route path="events" element={<EventsComponent />}></Route>
                            <Route path="refKeyFragment" element={<RefsKeyFragment />}></Route>
                            <Route path="memoCallback" element={<MemoCallback />}></Route>
                        </Route>
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
