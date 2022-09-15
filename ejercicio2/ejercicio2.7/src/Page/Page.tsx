import { Footer, Header, MainContent, Sections } from "../components/organisms";
import { Menu, Section, WebsiteHeading, PageContents, Sidebar } from "../components/molecules";
import { Logo } from "../components/atoms";

import "./Page.css";
import "../styles/custom-style.css";

export const Page = () => {
  return (
    <>
      <Header>
        <div className="div--flex">
          <Logo className="Header__Logo" />

          <WebsiteHeading className="Header__WebsiteHeading" />
        </div>

        <Menu>
          <p className="p--noMargin text--bold"> MENU </p>
        </Menu>
      </Header>

      <Sections>
        <Section> SECTION 1 </Section>

        <Section className="block--gray"> SECTION 2 </Section>

        <Section className="block--pink"> SECTION 3 </Section>
      </Sections>

      <MainContent>
        <PageContents/>

        <Sidebar/>
      </MainContent>

      <Footer/>
    </>
  );
};
