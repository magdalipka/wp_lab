interface AutoPart {
  fabricationCost;
  fabricationTime;
  avgUsageTime;
  yearlyCost;
}

class ElectricalPart implements AutoPart {
  fabricationCost() {}
  fabricationTime() {}
  avgUsageTime() {}
  yearlyCost() {}
}

class SuspensionPart implements AutoPart {
  fabricationCost() {}
  fabricationTime() {}
  avgUsageTime() {}
  yearlyCost() {}
}

class BodyPart implements AutoPart {
  fabricationCost() {}
  fabricationTime() {}
  avgUsageTime() {}
  yearlyCost() {}
}

interface Visitor {
  visitElectrical;
  visitSuspension;
  visitBody;
}

class FabricationCostVisitor implements Visitor {
  visitElectrical(part: ElectricalPart) {
    return part.fabricationCost();
  }
  visitSuspension(part: SuspensionPart) {
    return part.fabricationCost();
  }
  visitBody(part: BodyPart) {
    return part.fabricationCost();
  }
}

class FabricationTimeVisitor implements Visitor {
  visitElectrical(part: ElectricalPart) {
    return part.fabricationTime();
  }
  visitSuspension(part: SuspensionPart) {
    return part.fabricationTime();
  }
  visitBody(part: BodyPart) {
    return part.fabricationTime();
  }
}
