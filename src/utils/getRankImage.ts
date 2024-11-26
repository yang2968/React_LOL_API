import Unranked from '@/assets/images/rank/Unranked.png';
import Bronze from '@/assets/images/rank/Bronze.png';
import Silver from '@/assets/images/rank/Silver.png';
import Gold from '@/assets/images/rank/Gold.png';
import Platinum from '@/assets/images/rank/Platinum.png';
import Diamond from '@/assets/images/rank/Diamond.png';
import Master from '@/assets/images/rank/Master.png';
import GrandMaster from '@/assets/images/rank/GrandMaster.png';
import Challenger from '@/assets/images/rank/Challenger.png';

function getRankImage(rank: string) {
  switch (rank) {
    case 'IRON':
      return Bronze;
    case 'SILVER':
      return Silver;
    case 'GOLD':
      return Gold;
    case 'PLATINUM':
      return Platinum;
    case 'DIAMOND':
      return Diamond;
    case 'MASTER':
      return Master;
    case 'GRANDMASTER':
      return GrandMaster;
    case 'CHALLENGER':
      return Challenger;
    default:
      return Unranked;
  }
}

export default getRankImage;
