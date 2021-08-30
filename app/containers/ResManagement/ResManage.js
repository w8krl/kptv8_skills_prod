import React, { useMemo, useState, useEffect } from "react";
import ResList from './ResList';

import NewResModal from '../Modals/NewResModal';

export default function ResManage() {
  return (
    <div>
      <NewResModal />
      <ResList />
    </div>
  );
}
