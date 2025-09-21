import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "./lib/i18n";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Campus from "@/pages/Campus";
import Admissions from "@/pages/Admissions";
import Faculty from "@/pages/Faculty";
import Achievements from "@/pages/Achievements";
import News from "@/pages/News";
import Hostel from "@/pages/Hostel";
import Alumni from "@/pages/Alumni";
import Gallery from "@/pages/Gallery";
import Activities from "@/pages/Activities";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Policies from "@/pages/Policies";
import Management from "@/pages/Management";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/academics" component={Academics} />
      <Route path="/campus" component={Campus} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/news" component={News} />
      <Route path="/hostel" component={Hostel} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/activities" component={Activities} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/policies" component={Policies} />
      <Route path="/management" component={Management} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </TranslationProvider>
  );
}

export default App;
