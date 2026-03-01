import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Img } from "./components/Img";
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";
import { Table } from "./components/Table";
import { TableHeader } from "./components/TableHeader";
import { TableRow } from "./components/TableRow";
import { TableCell } from "./components/TableCell";
import { TableFooter } from "./components/TableFooter";

const PageWrapper = styled.div`
  font-family: sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
  color: #111827;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 8px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

const dropdownOptions = [
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B" },
  { label: "Option C", value: "C" },
];

const App: React.FC = () => {
  const [radioValue, setRadioValue] = useState("a");

  return (
    <PageWrapper>
      <PageTitle>Assignment 12: Web Component Library</PageTitle>

      <Section>
        <SectionTitle>Button</SectionTitle>
        <Row>
          <Button label="Hello World" disabled={false} />
          <Button label="Disabled" disabled={true} />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Label</SectionTitle>
        <Row>
          <Label text="Label" disabled={false} />
          <Label text="Label" disabled={true} />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Text</SectionTitle>
        <Row>
          <Text text="This is text" disabled={false} />
          <Text text="Disabled text" disabled={true} />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Dropdown</SectionTitle>
        <Row>
          <Dropdown options={dropdownOptions} disabled={false} />
          <Dropdown options={dropdownOptions} disabled={true} />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Radio Button</SectionTitle>
        <Row>
          <RadioButton
            label="Radio option"
            name="example"
            value="a"
            checked={radioValue === "a"}
            disabled={false}
            onChange={setRadioValue}
          />
          <RadioButton
            label="Disabled radio"
            name="example"
            value="b"
            checked={false}
            disabled={true}
          />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Img</SectionTitle>
        <Row>
          <Img src="/sample.jpg" alt="Sample image" disabled={false} />
          <Img src="/sample.jpg" alt="Sample image" disabled={true} />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Hero Image</SectionTitle>
        <HeroImage
          src="/sample.jpg"
          alt="Hero image"
          title="Hero title"
          disabled={false}
        />
        <br />
        <HeroImage
          src="/sample.jpg"
          alt="Hero image"
          title="Disabled Hero"
          disabled={true}
        />
      </Section>
      <Section>
        <SectionTitle>Card</SectionTitle>
        <Row>
          <Card title="Default Card" body="Card body text" disabled={false} />
          <Card title="Disabled Card" body="Disabled Card body text" disabled={true} />
        </Row>
      </Section>
      <Section>
        <SectionTitle>Table</SectionTitle>
        <Table disabled={false}>
          <TableHeader>
            <TableRow>
              <TableCell as="th">Name</TableCell>
              <TableCell as="th">Director</TableCell>
              <TableCell as="th">Country</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>In the mood for love</TableCell>
              <TableCell>Wong Kar Wai</TableCell>
              <TableCell>Hong Kong</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Undine</TableCell>
              <TableCell>Christian Petzold</TableCell>
              <TableCell>Germany</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Footer</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <br />

        <Table disabled={true}>
          <TableHeader disabled={true}>
            <TableRow disabled={true}>
              <TableCell as="th" disabled={true}>Name</TableCell>
              <TableCell as="th" disabled={true}>Director</TableCell>
              <TableCell as="th" disabled={true}>Country</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow disabled={true}>
              <TableCell disabled={true}>In the mood for love</TableCell>
              <TableCell disabled={true}>Wong Kar Wai</TableCell>
              <TableCell disabled={true}>Hong Kong</TableCell>
            </TableRow>
            <TableRow disabled={true}>
              <TableCell disabled={true}>Undine</TableCell>
              <TableCell disabled={true}>Christian Petzold</TableCell>
              <TableCell disabled={true}>Germany</TableCell>
            </TableRow>
          </tbody>
          <TableFooter disabled={true}>
            <TableRow disabled={true}>
              <TableCell colSpan={3} disabled={true}>Footer</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </PageWrapper>
  );
};

export default App;
