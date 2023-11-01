import CardsCommonHeader from "./CardsCommonHeader/CardsCommonHeader";
import "./cards.scss";
import SimpleCardWithLinks from "./SimpleCardWithLinks/SimpleCardWithLinks";
import SimpleCardWithHeaderAndButton from "./SimpleCardWithHeaderAndButton/SimpleCardWithHeaderAndButton";
import SimpleCardWithFooterAndButton from "./SimpleCardWithFooterAndButton/SimpleCardWithFooterAndButton";
import BackgroundColorCard from "./BackgroundColorCard/BackgroundColorCard";
import { bgColorCardData } from "./BackgroundColorCard/bgColorCardData";
import BasicCard from "./BasicCard/BasicCard";
import PanelWithCustomButtons from "./PanelWithCustomButtons/PanelWithCustomButtons";
import CardWithSearchForm from "./CardWithSearchForm/CardWithSearchForm";
import CardWithAlert from "./CardWithAlert/CardWithAlert";
import FullscreenButtonCard from "./FullscreenButtonCard/FullscreenButtonCard";
import InitialCollapsedCard from "./InitialCollapsedCard/InitialCollapsedCard";
import CardWithSwitch from "./CardWithSwitch/CardWithSwitch";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import profileImg from "./assets/images/dummy.jpg";
import SimpleQuoteCard from "./SimpleQuoteCard/SimpleQuoteCard";
import CardWithList from "./CardWithList/CardWithList";
import { cardWithListData } from "./CardWithList/cardWithListData";
import SampleCard from "./SampleCard/SampleCard";
import CardWithToolbar from "./CardWithToolbar/CardWithToolbar";
import CardWithImage from "./CardWithImage/CardWithImage";
import dummyImage from "./assets/images/dummy.jpg"
import CollapsibleCardWithImage from "./CollapsibleCardWithImage/CollapsibleCardWithImage";
import PlayMusicCard from "./PlayMusicCard/PlayMusicCard";
import BuiltCard from "./BuiltCard/BuiltCard";
import CardBlue from "./CardBlue/CardBlue";
import CardStatusLeftSide from "./CardStatusLeftSide/CardStatusLeftSide";
import CardWithSquareLoader from "./CardWithLoader/CardWithSquareLoader";
import CardWithBounceLoader from "./CardWithBounceLoader/CardWithBounceLoader";
import CardWithCubeLoader from "./CardWithCubeLoader/CardWithCubeLoader";

const Cards = () => {
    const bgColors = ["primary", "secondary", "success", "danger", "info", "warning"];

    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <CardsCommonHeader title="Cards" />
                    <div className="row">
                        <SimpleCardWithLinks cardTitle="Card title" cardSubtitle="Card subtitle" 
                            cardText="Some quick example text to build on the card title and make up the bulk of the card's content." 
                            firstLink="/" firstLinkText="Card link" secondLink="/" secondLinkText="Another link" />

                        <SimpleCardWithHeaderAndButton cardTitle="Card-Header" bodyText="With supporting text below as a natural lead-in to additional content." 
                            buttonAction={() => console.log("clicked")} buttonText="Go somewhere" />

                        <SimpleCardWithFooterAndButton cardText="With supporting text below as a natural lead-in to additional content." 
                            buttonAction={() => console.log("clicked")} buttonText="Go somewhere" footerText="Card-footer" />

                        <div className="row">
                            {bgColorCardData.map((item, index) => <BackgroundColorCard key={item.id} bgColor={bgColors[index]} title={item.title} text={item.text}/> )}
						</div>

						<BasicCard title="Basic card" footerText="This is Basic card footer" 
							bodyText="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet" />

						<BasicCard title="Basic color card-header" footerText="This is Basic card footer" bgColorHeader="primary" 
							bodyText="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet" />

						<BasicCard title="Basic color card-footer" footerText="Basic card footer" bgColorFooter="danger"
							bodyText="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet" />

						<PanelWithCustomButtons title="Panel with custom buttons" buttonOneText="Action 1" buttonTwoText="Action 2" 
							buttonOneAction={() => console.log("clicked 1")} buttonTwoAction={() => console.log("clicked 2")} 
							bodyText="No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer"/>

						<CardWithSearchForm title="Card with search form" placeholderText="Search something..."
						    bodyText="No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer"/>

						<CardWithAlert title="Card with alert" alertText="Adding action was successful" alertColor="success"
							bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

						<CardWithAlert title="Card with alert" alertText="Adding action failed" alertColor="danger"
							bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

						<FullscreenButtonCard title="fullscreen button" 
						    bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

						<CardWithSwitch title="Card with switch" 
						    bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

						<InitialCollapsedCard title="Initial collapsed card"
						    bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

						<div className="row">
							<EmployeeCard title="Employee card" employeeName="James Thomas" designation="Web designer" profileImg={profileImg}
							    fbLink="http://facebook.com" googlePlusLink="http://google.com" twitterLink="http://twitter.com" />

							<EmployeeCard title="Employee card" employeeName="Rebacca Thomas" designation="Web designer" profileImg={profileImg}
							    fbLink="http://facebook.com" googlePlusLink="http://google.com" twitterLink="http://twitter.com" />

							<EmployeeCard title="Employee card" employeeName="Thomas symson" designation="Web designer" profileImg={profileImg}
							    fbLink="http://facebook.com" googlePlusLink="http://google.com" twitterLink="http://twitter.com" />
						</div>

						<div className="row ">
							<SimpleQuoteCard textPosition="start" quoteText="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
								title="so awesome this title" author="-magna aliqua" />

							<SimpleQuoteCard textPosition="center" quoteText="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
								title="so awesome this title" author="-magna aliqua" />

							<SimpleQuoteCard textPosition="end" quoteText="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
								title="so awesome this title" author="-magna aliqua" />

							<CardWithList title="Card With List" cardData={cardWithListData} />

							<SampleCard title="Sample card" cardTextFirst="Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot."
								cardTextSecond="Scratch the postman wake up lick paw Duis aute irure dolor in reprehenderit wake up owner meow meow lick plastic bags  Scratch the postman wake up lick paw wake Duis aute irure dolor  having their mate disturbing sleeping humans." />

							<CardWithToolbar title="Card with Toolbar"  cardTextFirst="Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot." 
							    cardTextSecond="Duis aute irure dolor in reprehenderit in voluptate velit Scratch the postman wake up lick paw wake up owner meow meow lick plastic bags Scratch the postman wake up lick paw wake having their mate disturbing sleeping humans." />
						</div>

						<div className="row">
							<CardWithImage title="card-with image" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
								footerText="This is Basic card footer" bgImage={dummyImage} />

							<CardWithImage title="card-with image" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
								footerText="This is Basic card footer" bgImage={dummyImage} />

							<CollapsibleCardWithImage title="card-with image" bgImage={dummyImage} text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
						
							<PlayMusicCard title="Play Music" text="Some quick example text to build on the card title and make up the bulk of the card's" 
								titleClickAction={() => console.log("clicked title")} prevClickAction={() => console.log("clicked previous")} playClickAction={() => console.log("clicked play")} nextClickAction={() => console.log("clicked next")} />

							<PlayMusicCard title="Play Music" text="Some quick example text to build on the card title and make up the bulk of the card's" bgColor={true}
								titleClickAction={() => console.log("clicked title")} prevClickAction={() => console.log("clicked previous")} playClickAction={() => console.log("clicked play")} nextClickAction={() => console.log("clicked next")} />

							<BuiltCard cardColor="primary" title="primary card title" bodyText="Some quick example text to build on the card title and make up the bulk of the card's content." />
							
							<BuiltCard cardColor="secondary" title="Secondary card title" bodyText="Some quick example text to build on the card title and make up the bulk of the card's content." />
							
							<BuiltCard cardColor="success" title="Success card title" bodyText="Some quick example text to build on the card title and make up the bulk of the card's content." />
						
							<CardWithSquareLoader title="Card with loader" />

							<CardWithBounceLoader title="Card with loader" />

							<CardWithCubeLoader title="Card with loader" />

							<div className="row">
								<FullscreenButtonCard title="fullscreen button" isWide={true}
									bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
							
								<CardWithSwitch title="Card with switch" isWide={true}
									bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
							
								<InitialCollapsedCard title="Initial collapsed card" isWide={true}
									bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
							
								<BuiltCard title="Built card" isWide={true} 
									bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

								<CardBlue title="Card blue" bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
									isWide={true} />

								<CardStatusLeftSide title="Card status on left side" bodyText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
									isWide={true} />

							</div>
						</div>

					</div>
                </div>
            </div>
        </div>
    )
}

export default Cards;