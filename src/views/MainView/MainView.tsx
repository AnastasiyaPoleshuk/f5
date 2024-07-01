import { QuestsPreviewSection } from '../../sections/QuestsPreviewSection/QuestsPreviewSection';
import { WelcomeSection } from '../../sections/WelcomeSection/WelcomeSection';
import './MainView.scss';

export const MainView = () => {
  return (
    <main className='main'>
      <WelcomeSection />
      <QuestsPreviewSection />
    </main>
  );
};
