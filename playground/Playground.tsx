import * as React from 'react';
import {noop} from '@shopify/javascript-utilities/other';
import {
  TopBar,
  AppProvider,
  Navigation,
  Page,
  Frame,
  Icon,
} from '@shopify/polaris';
import ShopSwitcher from '../src/components/ShopSwitcher';

interface State {}

const shopSwitcherProps = {
  searchPlaceholder: 'Search stores',
  activeIndex: 1,
  shops: [
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
    {
      url: 'https://little-victories.myshopify.io',
      name: 'Little Victories CA',
    },
  ],
};

export default class Playground extends React.Component<never, State> {
  render() {
    const searchField = (
      <TopBar.SearchField onChange={noop} value="" placeholder="Search" />
    );

    const userMenu = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'item content'}],
          },
        ]}
        message={{
          title: 'Polaris',
          description: 'description',
          action: {onClick: noop, content: 'action content'},
          link: {to: '/', content: 'Link content'},
        }}
        name="Jakob Stecher"
        initials="DR"
        open={false}
        onToggle={noop}
      />
    );

    const supportMenu = (
      <TopBar.Menu
        actions={[
          {
            items: [{content: 'item content'}],
          },
        ]}
        activatorContent={<Icon source="help" />}
        open={false}
        onOpen={noop}
        onClose={noop}
      />
    );

    const shopSwitcher = shopSwitcherProps.shops.length > 1 && (
      <TopBar.ShopSwitcher {...shopSwitcherProps} />
    );

    const topBar = (
      <TopBar
        showNavigationToggle
        searchField={searchField}
        userMenu={userMenu}
        secondaryMenu={supportMenu}
        shopSwitcher={shopSwitcher}
      />
    );

    const navigation = (
      <Navigation location="/" userMenu={<div />}>
        <Navigation.Section
          items={[
            {
              url: '/',
              label: 'Products',
              icon: 'view',
              disabled: false,
            },
          ]}
        />
      </Navigation>
    );

    return (
      <AppProvider
        theme={{
          logo: {
            topBarSource: './shopify-logo.png',
          },
        }}
      >
        <Frame topBar={topBar} navigation={navigation}>
          <Page title="Playground" />
        </Frame>
      </AppProvider>
    );
  }
}
