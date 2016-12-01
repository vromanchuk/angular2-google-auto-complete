import { AutoCompletionGooglePage } from './app.po';

describe('auto-completion-google App', function() {
  let page: AutoCompletionGooglePage;

  beforeEach(() => {
    page = new AutoCompletionGooglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
