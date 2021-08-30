import React, { useMemo, useState, useEffect } from "react";
import ResList from './ResList';

import ResActions from '../Modals/ResActions';

export default function ResManage() {
  return (
    <div>
      <ResActions />
      <ResList />
    </div>
  );
}
