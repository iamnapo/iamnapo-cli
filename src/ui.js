/* eslint-disable react/react-in-jsx-scope, jsx-a11y/anchor-is-valid, no-unused-vars */
const { h, Color, Bold } = require('ink');
const SelectInput = require('ink-select-input');
const Link = require('ink-link');
const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Website',
    url: 'https://iamnapo.me',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/iamnapo',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/iamnapo',
  },
  {
    label: 'Contact',
    url: 'mailto:napoleonoikon@gmail.com',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/napohotline',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/_iamnapo',
  },
  {
    label: 'Quit',
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    },
  },
];

const ui = () => (
  <div>
    <span>
      <Bold>
        <Color hex="008B8B">
          {'Hello! I’m Napoleon-Christos Oikonomou. 😎'}
        </Color>
      </Bold>
    </span>
    <br />
    <span>
      <Color teal>
I’m an Electrical &amp; Computer Engineer and Software Developer, currently working as
        <br />
a Software Engineer at the
        {' '}
      </Color>
    </span>
    <span>
      <Link url="https://issel.ee.auth.gr/">
        <Color cyan>Intelligent Systems &amp; Software Engineering Labgroup</Color>
      </Link>
.

    </span>
    <br />
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);

module.exports = ui;
