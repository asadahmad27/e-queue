import React, { useState } from "react";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  FingerPrintIcon,
  FireIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

import { Entry } from "../../components/showcase";
import {
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Card,
  Tab,
  Accordion,
  FileUpload,
  Icon,
} from "../../components";

import {
  Facebook,
  Instagram,
  Twitter,
  Vkontakte,
  Spotify,
  Youtube,
  Linkedin,
  WhatsApp,
  SoundCloud,
  Send,
  Search,
  Check,
  Cancle,
  Arrow,
  Pen,
  Dot,
  Chart,
  Bucket,
  Edit,
  Star,
} from "../../icons";

// import { FEEDBACKS_NAME, REACTIONS_NAME } from '../../constants';
// import { Header } from '../../layout/header';
// import Footer from '../../layout/footer/main';

const entryClasses = "flex flex-col space-y-4";

const HeadingComponent = () => (
  <Entry
    width="large"
    className={entryClasses}
    name="Heading"
    importName="Heading"
  >
    <Heading label="Headline" variant="display" element="p" />
    <Heading label="Heading one" variant="heading-one" element="h1" />
    <Heading label="Heading two" variant="heading-two" element="h2" />
    <Heading label="Heading three" variant="heading-three" element="h3" />
    <Heading label="Heading four" variant="heading-four" element="h4" />
    <Heading label="Heading five" variant="heading-five" element="h5" />
    <Heading label="Heading six" variant="heading-six" element="h6" />
    <Heading label="Subheading" variant="subheading" element="p" />
  </Entry>
);

const TextComponent = () => (
  <Entry className={entryClasses} width="large" name="Text" importName="Text">
    <Text variant="text-lead" element="p">
      Paragraph Lead — Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </Text>
    <Text variant="text-regular" element="p">
      Paragraph Regular — Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Text variant="text-regular-bold" element="p">
      Paragraph Regular — Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Text variant="text-base" element="p">
      Paragraph Regular — Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Text variant="text-normal" element="p">
      Paragraph Regular — Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Text variant="text-small" element="p">
      Paragraph Small — Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
  </Entry>
);

const ButtonComponent = () => (
  <Entry
    className={entryClasses}
    name="Button"
    width="large"
    importName="Button"
  >
    <div className="flex items-center space-x-4">
      <Button.Semantic variant="primary" size="large" label="Large" />
      <Button.Semantic variant="primary" size="regular" label="Regular" />
      <Button.Semantic variant="primary" size="small" label="Small" />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic variant="secondary" size="large" label="Large" />
      <Button.Semantic variant="secondary" size="regular" label="Regular" />
      <Button.Semantic variant="secondary" size="small" label="Small" />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic variant="tertiary" size="large" label="Large" />
      <Button.Semantic variant="tertiary" size="regular" label="Regular" />
      <Button.Semantic variant="tertiary" size="small" label="Small" />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic variant="quaternary" size="large" label="Large" />
      <Button.Semantic variant="quaternary" size="regular" label="Regular" />
      <Button.Semantic variant="quaternary" size="small" label="Small" />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic variant="transparent" size="large" label="Large" />
      <Button.Semantic variant="transparent" size="regular" label="Regular" />
      <Button.Semantic variant="transparent" size="small" label="Small" />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="primary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="primary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="primary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="secondary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="secondary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="secondary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="tertiary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="tertiary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="tertiary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="quaternary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="quaternary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon }}
      />
      <Button.Semantic
        variant="quaternary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="primary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="primary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="primary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="secondary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="secondary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="secondary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="tertiary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="tertiary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="tertiary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
    </div>

    <div className="flex items-center space-x-4">
      <Button.Semantic
        variant="quaternary"
        size="large"
        label="Large"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="quaternary"
        size="regular"
        label="Regular"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
      <Button.Semantic
        variant="quaternary"
        size="small"
        label="Small"
        icon={{ svg: CheckCircleIcon, alignment: "right" }}
      />
    </div>
  </Entry>
);

const InputComponent = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleState = () => setShow((prevState) => !prevState);

  const buttonWrapper = (
    <a
      className="font-bold absolute bg-primary-black text-white text-lg leading-regular top-0 right-0 inline-flex py-4 px-5 rounded-tr-lg rounded-br-lg"
      href="/"
    >
      Search
    </a>
  );
  return (
    <Entry
      className={entryClasses}
      width="small"
      name="Input"
      importName="Input"
    >
      {/* ℹ️  Vanilla */}
      <Input
        required
        label="Name"
        placeholder="Jon Snow"
        variant="field"
        type="text"
        islabel
      />
      {/* ℹ️  Specified 'type' */}
      <Input
        type={show ? "text" : "password"}
        label="Password"
        variant="field"
        icon={{
          svg: show ? EyeIcon : EyeIcon,
          alignment: "right",
          onShow: toggleState,
          clickable: true,
        }}
        islabel
      />

      <Input
        type={"text"}
        label="Search"
        variant="search"
        placeholder="Search by Brand Names, or Products"
        icon={{
          svg: EyeIcon,
          alignment: "left",
        }}
        action={buttonWrapper}
        islabel
      />

      {/* ℹ️  Specified 'type' */}
      <Input type="date" label="Publish date" variant="field" islabel />
      {/* ℹ️  Disabled */}
      <Input
        disabled
        type="date"
        label="Publish date"
        variant="field"
        islabel
      />
      {/* ℹ️  Displaying help text */}
      <Input
        label="Name"
        defaultValue="Arya"
        helpText="What would you like us to call you?"
        variant="field"
        type="text"
        islabel
      />
      {/* ℹ️  Displaying error */}
      <Input
        label="Name"
        type="text"
        error="First name cannot contain mathematical equations"
        variant="field"
        islabel
      />
    </Entry>
  );
};
const TextareaComponent = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Textarea"
    importName="Textarea"
  >
    {/* ℹ️  Vanilla */}
    <Textarea
      required
      label="Description"
      placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
      variant="text-area"
      islabel
    />
    {/* ℹ️  Displaying help text */}
    <Textarea
      label="Description"
      defaultValue="Arya"
      helpText="Tell us a story"
      variant="text-area"
      islabel
    />
    {/* ℹ️  Disabled */}
    <Textarea
      disabled
      label="Description"
      defaultValue="Arya"
      helpText="Tell us a story"
      variant="text-area"
      islabel
    />
    {/* ℹ️  Displaying error */}
    <Textarea
      label="Description"
      error="Description must contain at least 3 dragon references"
      variant="text-area"
      islabel
    />
  </Entry>
);

const cardDetails = {
  image: "https://picsum.photos/id/216/500/375",

  heading: "Lorem Ipsum Dolor",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
};

const extraLongContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const cardMetaButton = (
  <Button.Link
    href="#"
    label="Read more"
    variant="tertiary"
    size="small"
    icon={{ svg: ChevronRightIcon, alignment: "right" }}
  />
);

const CardComponent = () => (
  <Entry className={entryClasses} width="large" name="Card" importName="Card">
    {/* ℹ️  Vanilla grid of cards */}
    <div className="flex flex-wrap -m-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card {...cardDetails} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card {...cardDetails} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card {...cardDetails} />
      </div>
    </div>
    {/* ℹ️  Grid of framed cards */}
    <div className="bg-true-gray-200 p-8">
      <div className="flex flex-wrap -m-4">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <Card isFramed {...cardDetails} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <Card isFramed {...cardDetails} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <Card isFramed {...cardDetails} />
        </div>
      </div>
    </div>
    {/* ℹ️  Grid of cards with meta content aligned to the bottom of the row */}
    <div className="flex flex-wrap items-stretch -m-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card
          hasAutoHeight
          {...cardDetails}
          content={extraLongContent}
          meta={cardMetaButton}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card hasAutoHeight {...cardDetails} meta={cardMetaButton} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card hasAutoHeight {...cardDetails} meta={cardMetaButton} />
      </div>
    </div>
    {/* ℹ️  Grid of cards with meta content aligned to the bottom of the individual card's content */}
    <div className="flex flex-wrap items-stretch -m-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card
          {...cardDetails}
          content={extraLongContent}
          meta={cardMetaButton}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card {...cardDetails} meta={cardMetaButton} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <Card {...cardDetails} meta={cardMetaButton} />
      </div>
    </div>
  </Entry>
);

const ProductReviewCardComponent = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="ProductReviewCard"
    importName="ProductReviewCard"
  >
    {/* ℹ️  Vanilla grid of cards */}
    <div className="flex flex-wrap -m-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        {/* <ProductReviewCard {...cardDetails} /> */}
      </div>
    </div>
    <div className="w-full ">
      {/* <ProductReviewCard isFullWidth {...ProductCardReviewDetails} /> */}
    </div>
  </Entry>
);

const BrandCardComponent = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="BrandCard"
    importName="BrandCard"
  >
    {/* ℹ️  Vanilla grid of cards */}
    <div className="flex flex-wrap -m-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        {/* <BrandCard {...brandCardDetails} /> */}
      </div>
    </div>
  </Entry>
);

const TabComponent = () => (
  <Entry className={entryClasses} width="large" name="Tab" importName="Tab">
    {/* ℹ️  Vanilla tabs */}
    <Tab.Container>
      <Tab.Panel label="Daeneryss">
        <p>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen
          and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest
          child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were
          both ousted from the Iron Throne during Robert Baratheon&apos;s
          rebellion.
        </p>
      </Tab.Panel>
      <Tab.Panel label="Jonn">
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. After successfully
          capturing a wight and presenting it to the Lannisters as proof that
          the Army of the Dead are real, Jon pledges himself and his army to
          Daenerys Targaryen.
        </p>
      </Tab.Panel>
      <Tab.Panel label="Aryaa">
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </Tab.Panel>
    </Tab.Container>
    {/* ℹ️  Tabs with icons */}
    <Tab.Container>
      <Tab.Panel label="Rhaegar" icon={FingerPrintIcon}>
        <p>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen
          and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest
          child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were
          both ousted from the Iron Throne during Robert Baratheon&apos;s
          rebellion.
        </p>
      </Tab.Panel>
      <Tab.Panel label=" Lyanna" icon={FireIcon}>
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. After successfully
          capturing a wight and presenting it to the Lannisters as proof that
          the Army of the Dead are real, Jon pledges himself and his army to
          Daenerys Targaryen.
        </p>
      </Tab.Panel>
      <Tab.Panel label="Catelyn" icon={EyeIcon}>
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </Tab.Panel>
    </Tab.Container>
  </Entry>
);

const AccordionComponent = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Accordion"
    importName="Accordion"
  >
    {/* ℹ️  Vanilla accordion */}
    <Accordion.Container>
      <Accordion.Panel label="Queen">
        <p>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen
          and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest
          child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were
          both ousted from the Iron Throne during Robert Baratheon&apos;s
          rebellion.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="Jon Snow" variant="secondary">
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. After successfully
          capturing a wight and presenting it to the Lannisters as proof that
          the Army of the Dead are real, Jon pledges himself and his army to
          Daenerys Targaryen.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="Eddard">
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </Accordion.Panel>
    </Accordion.Container>
    {/* ℹ️  Accordion with icons */}
    <Accordion.Container expandMode="single">
      <Accordion.Panel label="Batman" icon={FingerPrintIcon}>
        <p>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen
          and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest
          child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were
          both ousted from the Iron Throne during Robert Baratheon&apos;s
          rebellion.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="John" icon={FireIcon}>
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. After successfully
          capturing a wight and presenting it to the Lannisters as proof that
          the Army of the Dead are real, Jon pledges himself and his army to
          Daenerys Targaryen.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="Jammie" icon={EyeIcon}>
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </Accordion.Panel>
    </Accordion.Container>
    {/* ℹ️  Accordion that permits multiple panels to be open simultaneously */}
    <Accordion.Container expandMode="multiple">
      <Accordion.Panel label="Daenerys">
        <p>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen
          and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest
          child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were
          both ousted from the Iron Throne during Robert Baratheon&apos;s
          rebellion.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="Jon">
        <p>
          Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar
          Targaryen, the late Prince of Dragonstone. After successfully
          capturing a wight and presenting it to the Lannisters as proof that
          the Army of the Dead are real, Jon pledges himself and his army to
          Daenerys Targaryen.
        </p>
      </Accordion.Panel>
      <Accordion.Panel label="Faceless">
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </Accordion.Panel>
    </Accordion.Container>
  </Entry>
);

const FacebookIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Facebook"
    importName="Facebook"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Facebook} variant="primary" size="small" />
      <Icon Component={Facebook} variant="primary" size="medium" />
      <Icon Component={Facebook} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Facebook} variant="secondary" size="small" />
      <Icon Component={Facebook} variant="secondary" size="medium" />
      <Icon Component={Facebook} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Facebook} variant="tertiary" size="small" />
      <Icon Component={Facebook} variant="tertiary" size="medium" />
      <Icon Component={Facebook} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const InstagramIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Instagram"
    importName="Instagram"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Instagram} variant="primary" size="small" />
      <Icon Component={Instagram} variant="primary" size="medium" />
      <Icon Component={Instagram} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Instagram} variant="secondary" size="small" />
      <Icon Component={Instagram} variant="secondary" size="medium" />
      <Icon Component={Instagram} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Instagram} variant="tertiary" size="small" />
      <Icon Component={Instagram} variant="tertiary" size="medium" />
      <Icon Component={Instagram} variant="tertiary" size="large" />
    </div>
  </Entry>
);

const TwitterIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Twitter"
    importName="Twitter"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Twitter} variant="primary" size="small" />
      <Icon Component={Twitter} variant="primary" size="medium" />
      <Icon Component={Twitter} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Twitter} variant="secondary" size="small" />
      <Icon Component={Twitter} variant="secondary" size="medium" />
      <Icon Component={Twitter} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Twitter} variant="tertiary" size="small" />
      <Icon Component={Twitter} variant="tertiary" size="medium" />
      <Icon Component={Twitter} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const VkontakteIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Vkontakte"
    importName="Vkontakte"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Vkontakte} variant="primary" size="small" />
      <Icon Component={Vkontakte} variant="primary" size="medium" />
      <Icon Component={Vkontakte} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Vkontakte} variant="secondary" size="small" />
      <Icon Component={Vkontakte} variant="secondary" size="medium" />
      <Icon Component={Vkontakte} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Vkontakte} variant="tertiary" size="small" />
      <Icon Component={Vkontakte} variant="tertiary" size="medium" />
      <Icon Component={Vkontakte} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const SpotifyIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Spotify"
    importName="Spotify"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Spotify} variant="primary" size="small" />
      <Icon Component={Spotify} variant="primary" size="medium" />
      <Icon Component={Spotify} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Spotify} variant="secondary" size="small" />
      <Icon Component={Spotify} variant="secondary" size="medium" />
      <Icon Component={Spotify} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Spotify} variant="tertiary" size="small" />
      <Icon Component={Spotify} variant="tertiary" size="medium" />
      <Icon Component={Spotify} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const YoutubeIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Youtube"
    importName="Youtube"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Youtube} variant="primary" size="small" />
      <Icon Component={Youtube} variant="primary" size="medium" />
      <Icon Component={Youtube} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Youtube} variant="secondary" size="small" />
      <Icon Component={Youtube} variant="secondary" size="medium" />
      <Icon Component={Youtube} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Youtube} variant="tertiary" size="small" />
      <Icon Component={Youtube} variant="tertiary" size="medium" />
      <Icon Component={Youtube} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const LinkedinIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Linkedin"
    importName="Linkedin"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Linkedin} variant="primary" size="small" />
      <Icon Component={Linkedin} variant="primary" size="medium" />
      <Icon Component={Linkedin} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Linkedin} variant="secondary" size="small" />
      <Icon Component={Linkedin} variant="secondary" size="medium" />
      <Icon Component={Linkedin} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Linkedin} variant="tertiary" size="small" />
      <Icon Component={Linkedin} variant="tertiary" size="medium" />
      <Icon Component={Linkedin} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const WhatsAppIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="WhatsApp"
    importName="WhatsApp"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={WhatsApp} variant="primary" size="small" />
      <Icon Component={WhatsApp} variant="primary" size="medium" />
      <Icon Component={WhatsApp} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={WhatsApp} variant="secondary" size="small" />
      <Icon Component={WhatsApp} variant="secondary" size="medium" />
      <Icon Component={WhatsApp} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={WhatsApp} variant="tertiary" size="small" />
      <Icon Component={WhatsApp} variant="tertiary" size="medium" />
      <Icon Component={WhatsApp} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const SoundCloudIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="SoundCloud"
    importName="SoundCloud"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={SoundCloud} variant="primary" size="small" />
      <Icon Component={SoundCloud} variant="primary" size="medium" />
      <Icon Component={SoundCloud} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={SoundCloud} variant="secondary" size="small" />
      <Icon Component={SoundCloud} variant="secondary" size="medium" />
      <Icon Component={SoundCloud} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={SoundCloud} variant="tertiary" size="small" />
      <Icon Component={SoundCloud} variant="tertiary" size="medium" />
      <Icon Component={SoundCloud} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const SendIcon = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Send"
    importName="Send"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Send} variant="primary" size="small" />
      <Icon Component={Send} variant="primary" size="medium" />
      <Icon Component={Send} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Send} variant="secondary" size="small" />
      <Icon Component={Send} variant="secondary" size="medium" />
      <Icon Component={Send} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Send} variant="tertiary" size="small" />
      <Icon Component={Send} variant="tertiary" size="medium" />
      <Icon Component={Send} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const SearchIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Search"
    importName="Search"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Search} isStroke variant="primary" size="small" />
      <Icon Component={Search} isStroke variant="primary" size="medium" />
      <Icon Component={Search} isStroke variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Search} isStroke variant="secondary" size="small" />
      <Icon Component={Search} isStroke variant="secondary" size="medium" />
      <Icon Component={Search} isStroke variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Search} isStroke variant="tertiary" size="small" />
      <Icon Component={Search} isStroke variant="tertiary" size="medium" />
      <Icon Component={Search} isStroke variant="tertiary" size="large" />
    </div>
  </Entry>
);
const CheckIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Check"
    importName="Check"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Check} isStroke variant="primary" size="small" />
      <Icon Component={Check} isStroke variant="primary" size="medium" />
      <Icon Component={Check} isStroke variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Check} isStroke variant="secondary" size="small" />
      <Icon Component={Check} isStroke variant="secondary" size="medium" />
      <Icon Component={Check} isStroke variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Check} isStroke variant="tertiary" size="small" />
      <Icon Component={Check} isStroke variant="tertiary" size="medium" />
      <Icon Component={Check} isStroke variant="tertiary" size="large" />
    </div>
  </Entry>
);
const CancleIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Cancle"
    importName="Cancle"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Cancle} isStroke variant="primary" size="small" />
      <Icon Component={Cancle} isStroke variant="primary" size="medium" />
      <Icon Component={Cancle} isStroke variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Cancle} isStroke variant="secondary" size="small" />
      <Icon Component={Cancle} isStroke variant="secondary" size="medium" />
      <Icon Component={Cancle} isStroke variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Cancle} isStroke variant="tertiary" size="small" />
      <Icon Component={Cancle} isStroke variant="tertiary" size="medium" />
      <Icon Component={Cancle} isStroke variant="tertiary" size="large" />
    </div>
  </Entry>
);
const ArrowIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Arrow"
    importName="Arrow"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Arrow} variant="primary" size="small" />
      <Icon Component={Arrow} variant="primary" size="medium" />
      <Icon Component={Arrow} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Arrow} variant="secondary" size="small" />
      <Icon Component={Arrow} variant="secondary" size="medium" />
      <Icon Component={Arrow} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Arrow} variant="tertiary" size="small" />
      <Icon Component={Arrow} variant="tertiary" size="medium" />
      <Icon Component={Arrow} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const PenIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="PenIcons"
    importName="PenIcons"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Pen} variant="primary" size="small" />
      <Icon Component={Pen} variant="primary" size="medium" />
      <Icon Component={Pen} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Pen} variant="secondary" size="small" />
      <Icon Component={Pen} variant="secondary" size="medium" />
      <Icon Component={Pen} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Pen} variant="tertiary" size="small" />
      <Icon Component={Pen} variant="tertiary" size="medium" />
      <Icon Component={Pen} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const DotIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Dot"
    importName="Dot"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Dot} variant="primary" size="small" />
      <Icon Component={Dot} variant="primary" size="medium" />
      <Icon Component={Dot} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Dot} variant="secondary" size="small" />
      <Icon Component={Dot} variant="secondary" size="medium" />
      <Icon Component={Dot} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Dot} variant="tertiary" size="small" />
      <Icon Component={Dot} variant="tertiary" size="medium" />
      <Icon Component={Dot} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const ChartIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Chart"
    importName="Chart"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Chart} variant="primary" size="small" />
      <Icon Component={Chart} variant="primary" size="medium" />
      <Icon Component={Chart} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Chart} variant="secondary" size="small" />
      <Icon Component={Chart} variant="secondary" size="medium" />
      <Icon Component={Chart} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Chart} variant="tertiary" size="small" />
      <Icon Component={Chart} variant="tertiary" size="medium" />
      <Icon Component={Chart} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const BucketIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Bucket"
    importName="Bucket"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Bucket} variant="primary" size="small" />
      <Icon Component={Bucket} variant="primary" size="medium" />
      <Icon Component={Bucket} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Bucket} variant="secondary" size="small" />
      <Icon Component={Bucket} variant="secondary" size="medium" />
      <Icon Component={Bucket} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Bucket} variant="tertiary" size="small" />
      <Icon Component={Bucket} variant="tertiary" size="medium" />
      <Icon Component={Bucket} variant="tertiary" size="large" />
    </div>
  </Entry>
);
const EditIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Edit"
    importName="Edit"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Edit} variant="primary" size="small" />
      <Icon Component={Edit} variant="primary" size="medium" />
      <Icon Component={Edit} variant="primary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Edit} variant="secondary" size="small" />
      <Icon Component={Edit} variant="secondary" size="medium" />
      <Icon Component={Edit} variant="secondary" size="large" />
    </div>
    <div className="flex items-center space-x-4">
      <Icon Component={Edit} variant="tertiary" size="small" />
      <Icon Component={Edit} variant="tertiary" size="medium" />
      <Icon Component={Edit} variant="tertiary" size="large" />
    </div>
  </Entry>
);

const StarIcons = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="Star"
    importName="Star"
    path="icons"
  >
    <div className="flex items-center space-x-4">
      <Icon Component={Star} variant="primary" size="small" />
      <Icon Component={Star} variant="primary" size="medium" />
      <Icon Component={Star} variant="primary" size="large" />
    </div>
  </Entry>
);

const FileUploadComponent = () => (
  <Entry
    className={entryClasses}
    width="large"
    name="FileUpload"
    importName="FileUpload"
  >
    <div className="flex items-center space-x-4">
      <FileUpload
        blob={""}
        setBlob={function (blob: string): void {
          throw new Error("Function not implemented.");
        }}
        setFile={function (file: File): void {
          throw new Error("Function not implemented.");
        }}
        file={undefined}
      />
    </div>
  </Entry>
);

const BaseComponents = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <HeadingComponent />
        <TextComponent />
        <ButtonComponent />
        <InputComponent />
        <TextareaComponent />
        <CardComponent />
        <ProductReviewCardComponent />

        <BrandCardComponent />

        <TabComponent />
        <AccordionComponent />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <VkontakteIcon />
        <SpotifyIcon />
        <YoutubeIcon />
        <LinkedinIcon />
        <WhatsAppIcon />
        <SoundCloudIcon />
        <SendIcon />
        <SearchIcons />
        <CheckIcons />
        <ArrowIcons />
        <StarIcons />
        <CancleIcons />
        <PenIcons />
        <DotIcons />
        <ChartIcons />
        <BucketIcons />
        <EditIcons />

        <FileUploadComponent />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default BaseComponents;
